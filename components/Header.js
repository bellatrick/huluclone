import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon} from '@heroicons/react/outline'
const Header = () => {
    const headerData=[
        {
            title:'HOME',
             icon: HomeIcon
        },
        {
            title:'VERIFIED',
             icon: BadgeCheckIcon
        },
        {
            title:'COLLECTIONS',
             icon: CollectionIcon
        },
        {
            title:'TRENDING',
             icon: LightningBoltIcon
        },
        {
            title:'SEARCH',
             icon: SearchIcon
        },
        {
            title:'ACCOUNT',
             icon: UserIcon
        },
    ]
    return (
        <header className='flex flex-col sm:flex-row m-3 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
          {headerData.map((data,i)=> (
               <HeaderItem title={data.title} Icon={data.icon} key={i}/>
          ))}
            </div>
        <Image className='object-contain' src='https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png' width={200} height={100} /> 
        </header>
    )
}

export default Header
