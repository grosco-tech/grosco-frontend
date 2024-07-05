import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import ProductCard from "./ProductCard";


export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <section className="bg-[#D6E8EE] bg-cover bg-center bg-no-repeat py-20">
        <div className="container mx-auto flex flex-col items-center justify-center text-center text-white">
          <h1 className="mb-4 text-4xl font-bold text-[#001B48]">
            Freshness Delivered to Your Doorstep
          </h1>
          <p className="mb-8 text-lg text-[#001B48]">
            Discover the best quality groceries and household essentials, all at
            your fingertips.
          </p>
          <div className="flex justify-center mb-8 w-full">
            <Input type="search" placeholder="Search for products..." className="w-full max-w-lg" />
          </div>
        </div>
      </section>
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-bold">Featured Categories</h2>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <CitrusIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Fruits</span>
            </Link>
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <CarrotIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Vegetables</span>
            </Link>
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <MilkIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Dairy</span>
            </Link>
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <BeefIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Meat</span>
            </Link>
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <FishIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Seafood</span>
            </Link>
            <Link to="#" className="flex flex-col items-center space-y-2">
              <div className="rounded-full bg-muted/20 p-4">
                <PaletteIcon className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Pantry</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-muted py-12 md:py-20">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-bold">Featured Products</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <ProductCard header="Coming Soon" price=" ₹00.00" />
            <ProductCard header="Coming Soon" price=" ₹00.00" />
            <ProductCard header="Coming Soon" price=" ₹00.00" />
            <ProductCard header="Coming Soon" price=" ₹00.00" />
          </div>
        </div>
      </section>
      <section className="bg-background py-12 md:py-20">
        <div className="container mx-auto">
          <h2 className="mb-8 text-2xl font-bold">How It Works</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <SearchIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Search & Discover</h3>
              <p className="text-muted-foreground">
                Browse our wide selection of fresh groceries and household
                items.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <ShoppingCartIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Add to Cart</h3>
              <p className="text-muted-foreground">
                Add your desired items to your cart and proceed to checkout.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <TruckIcon className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-semibold">Delivery</h3>
              <p className="text-muted-foreground">
                Sit back and relax while we deliver your order to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BeefIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12.5" cy="8.5" r="2.5" />
      <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z" />
      <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5" />
    </svg>
  );
}

function CarrotIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46" />
      <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z" />
      <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z" />
    </svg>
  );
}

function CitrusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
      <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
      <path d="m14 10-5.5 5.5" />
      <path d="M14 17.85V10H6.15" />
    </svg>
  );
}

function FishIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function MilkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2h8" />
      <path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
      <path d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#008ABE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#008ABE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function TruckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#008ABE"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  );
}
