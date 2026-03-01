import HeroSub from '@/components/SharedComponent/HeroSub'
import React from 'react'
import { Metadata } from "next";
import Counter from '@/components/Home/Counter';
import WorkGrow from '@/components/Home/work-grow';
import BuildAmazing from '@/components/Home/Build-Amazing';
export const metadata: Metadata = {
    title: "About | BEXT",
};

const page = () => {
  return (
    <>
        <HeroSub
            title="About Us"
            description="Hello! We are BEXT Solutions, a sustainability-focused company dedicated to creating innovative solutions for a greener future. Our mission is to develop and implement sustainable technologies that address environmental challenges and promote responsible resource management. With a team of passionate experts, we strive to make a positive impact on the planet through our cutting-edge products and services. Join us on our journey towards a more sustainable world."
        />
        {/*<Counter/>*/}
        <WorkGrow/>
        {/*<BuildAmazing isSpace={false} />*/}
    </>
  )
}

export default page