import Image from "next/image"
import profileImg from '../public/profileImg.png'

function Header() {
  return (
    <>
      <div>This is my proud little Header.</div>
      <Image src={profileImg} alt='Profile image' width={100} height={100} />
    </>
  )
}

export default Header
