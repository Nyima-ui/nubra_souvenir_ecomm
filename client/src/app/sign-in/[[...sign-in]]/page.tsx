import { SignIn } from "@clerk/nextjs"
import Image from "next/image"




const page = () => {
  return (
        <section className="pt-[70px] bg-neutral-bg h-screen w-screen px-7.5 lg:px-15 flex gap-30 justify-between items-start overflow-hidden">
          <div className="md:max-w-[436px]">
              <SignIn />
          </div>
          <div className="max-md:hidden min-w-[50%] border mt-10 h-full overflow-hidden">
            <Image
              src="/images/buddha.jpg"
              alt="Picture of Buddha for design purpose"
              height={620}
              width={508}
              className="h-full w-full object-cover"
            />
          </div>
        </section>
  )
}

export default page
