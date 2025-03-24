import Link from "next/link";
import { Button } from "./ui/button";

const GlassmorphicNav = () => {
  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 flex w-11/12 max-w-7xl -translate-x-1/2 flex-col items-center rounded-full bg-background/20 p-3 backdrop-blur-lg md:rounded-full">
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            {/* <Image
              src="/images/orcdev.png"
              alt="Orc Dev"
              width={50}
              height={50}
            /> */}
            Project X
          </Link>
        </div>
        <Button>Click me!</Button>
      </div>
    </nav>
  );
};

export default GlassmorphicNav;
