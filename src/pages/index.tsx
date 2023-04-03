import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'

import AnimatedText from '@/components/AnimatedText'

import profilePic from '@p/developer-pic-1.png'
import { motion } from 'framer-motion'


const MotionImage = motion(Image)
const quote = {
  initial: {
    opacity: 0,
    x: -50
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.08,
    }
  }
}

import { useState } from 'react'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
const language = {
  pt: {
    title: 'Transformando ideias em realidade com código e design.',
    describe: 'Como desenvolvedor full-stack iniciante, dedico-me a transformar ideias em projetos web bem organizados.\nNavegue pelos meus projetos e artigos mais recentes, mostrando minha experiência em React.js e desenvolvimento web.'
  },
  en: {
    title: 'Turning Vision Into Reality With Code And Design.',
    describe: "As a beginner full-stack developer, I'm dedicated to turning ideas into well-organized web projects. \nBrowse my latest projects and articles, showcasing my expertise in React.js and web development."
  },
  es: {
    title: 'Convirtiendo la visión en realidad con código y diseño.',
    describe: 'Como desarrollador full-stack principiante, me dedico a convertir ideas en proyectos web bien organizados.\nExplore mis últimos proyectos y artículos, mostrando mi experiencia en React.js y desarrollo web.'
  },
}

export default function Home() {
  const [text, setText] = useState<'pt' | 'es' | 'en'>('pt');
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout classname='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <aside className='w-1/2 '>
              <MotionImage variants={quote} initial='initial' animate='animate' priority src={profilePic} alt='CodeBucks' className='w-full h-auto' />
            </aside>
            <article id='article-about' className='w-1/2 flex flex-col items-center self-center'>
              <header className='flex'>
                <AnimatedText Tag='h1' text={language[text]?.title} className='!text-6xl text-left' />
              </header>
              <main>
                <p className='my-4 text-base font-medium'>
                  {language[text]?.describe}
                </p>
              </main>
              <footer className='flex items-center self-start mt-2 gap-10'>
                <Link href='/dummy.pdf' target={'_blank'} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-black border border-solid border-transparent hover:border-dark'>Resume <LinkArrow className='w-6 ml-1' /></Link>
                <Link href='mailto:sthivendevelop@gmail.com' className='text-lg font-medium capitalize text-dark underline' >Contact</Link>
              </footer>
            </article>
          </div>
        </Layout>
        <HireMe />
        
      </main>
    </>
  )
}
