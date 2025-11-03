import Link from "next/link";

export default function Breadcrumb({ data, color }) {
  return (
    <ul className='flex justify-start gap-2'>
      <li className='text-xs sm:text-base md:text-lg cursor-pointer font-novaReg'>
        <Link href="/"
          className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] text-${color} after:bg-secondary after:transition-all after:duration-300 hover:after:w-full`}
        >Home</Link>
      </li>
      {data?.map((item, index) => (
        <li key={index} className={`before:content-['/'] before:pr-2 capitalize cursor-pointer text-${color} text-xs sm:text-base md:text-lg ${index === data.length - 1 ? 'font-novaBold' : 'font-novaReg'
          }`}>
          <Link
            href={item.Link}
            className={`relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1px] text-${color} after:bg-secondary after:transition-all after:duration-300 hover:after:w-full`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}