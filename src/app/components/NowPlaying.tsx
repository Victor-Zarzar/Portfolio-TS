'use client'
import React, { useEffect, useState } from 'react'

type NowPlayingSong = {
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
}

export default function NowPlaying() {

    const [song, setSong] = useState<NowPlayingSong>();

    useEffect(() => {
        async function getData() {
            const res = await fetch('/api/now-playing');
            const data: NowPlayingSong = await res.json();
            setSong(data);
        }

        getData();

        console.log(song)

    })

    return (
        <div className='flex w-48 md:w-80 mx-auto mt-20 mb-6 space-x-2 border-2 p-2 rounded-md dark:hover:text-white dark:text-gray-400 text-[11px] md:text-lg'>
            <div className='inline-flex md:flex-col flex-row max-w-full truncate'>
                {song?.songUrl ? (
                    <a className='capsize dark:hover:text-white dark:text-gray-400'>{song.title}</a>
                ) : (
                    <p className='capsize max-w-max truncate'>No music playing at the moment...</p>
                )}
                {song?.artist && (

                    <>
                        <span className='mx-2 block md:hidden'>{' - '}</span>
                        <p>{song?.artist ?? 'Spotify'}</p>
                    </>
                )}
            </div>
        </div>
    )
}
