
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NewArrival() {
  return (
    (<section className="py-12 mt-14 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:gap-6 lg:gap-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">This Week's Specials</h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              All our new arrivals in an exclusive brand selection
            </p>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 1"
                className="object-cover w-full aspect-square"
                height={500}
                src="https://nuturemite.info/wp-content/uploads/2022/11/1074368-3.jpg"
                width={500} />
              <div className="bg-white p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Classic Leather Shoes</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Elegant and comfortable</p>
                <div className="flex items-center justify-between mt-2">
                  <h4 className="font-semibold text-lg">$59.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 2"
                className="object-cover w-full aspect-square"
                height={500}
                src="https://nuturemite.info/wp-content/uploads/2022/11/Pineapple-CMYK-900g-scaled.jpg"
                width={500} />
              <div className="bg-white p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Designer Handbag</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fashion statement</p>
                <div className="flex items-center justify-between mt-2">
                  <h4 className="font-semibold text-lg">$89.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 3"
                className="object-cover w-full aspect-square"
                height={500}
                src="https://nuturemite.info/wp-content/uploads/2022/11/1074368-3.jpg"
                width={500} />
              <div className="bg-white p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Wireless Earbuds</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Crystal clear audio</p>
                <div className="flex items-center justify-between mt-2">
                  <h4 className="font-semibold text-lg">$69.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 4"
                className="object-cover w-full aspect-square"
                height={500}
                src="https://nuturemite.info/wp-content/uploads/2022/11/Pineapple-Mockup-White-900g-scaled.jpg"
                width={500} />
              <div className="bg-white p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Vintage Pocket Watch</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Antique charm</p>
                <div className="flex items-center justify-between mt-2">
                  <h4 className="font-semibold text-lg">$79.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
            <div
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link className="absolute inset-0 z-10" href="#">
                <span className="sr-only">View</span>
              </Link>
              <img
                alt="Product 5"
                className="object-cover w-full aspect-square"
                height={500}
                src="https://nuturemite.info/wp-content/uploads/2022/11/1074367-3-scaled.jpg"
                width={500} />
              <div className="bg-white p-4 dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">Retro Sunglasses</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Timeless style</p>
                <div className="flex items-center justify-between mt-2">
                  <h4 className="font-semibold text-lg">$49.99</h4>
                  <Button size="sm">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>)
  );
}

function StarIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>)
  );
}
