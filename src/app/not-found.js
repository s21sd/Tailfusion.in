import Link from 'next/link'

export default function NotFound() {
  return <section className="flex mx-auto w-full dark:text-[#9e4ceb] text-[#fff2c1] ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl">404</h1>
        <p className="mb-4 text-3xl tracking-tight font-bold  md:text-4xl">Something's missing.</p>
        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
        <Link href="/" className="border rounded-md p-4 w-[230px] font-semibold cursor-pointer text-white border-[#fff2c1] dark:border-[#9e4ceb] dark:text-black flex justify-center items-center mx-auto gap-4">Back to Homepage</Link>
      </div>
    </div>
  </section>

}