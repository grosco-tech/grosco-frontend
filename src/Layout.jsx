
import { cn } from "@/lib/utils";
import "./index.css";
import { Link, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import logo from "@/assets/logo.svg";

export default function Layout() {
  return (
    <>
      <header className="bg-secondary py-4 text-secondary-foreground">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Grosco" className="h-15 w-28" />
          </Link>
          <nav className="flex items-center gap-4">
            <Link to="#" className="hover:underline">
              Fruits & Vegetables
            </Link>
            <Link to="#" className="hover:underline">
              Dairy & Eggs
            </Link>
            <Link to="#" className="hover:underline">
              Meat & Seafood
            </Link>
            <Link to="#" className="hover:underline">
              Pantry
            </Link>
            <Link to="#" className="hover:underline">
              Household
            </Link>
            <Link to="#" className="hover:underline">
              Beauty & Personal Care
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button variant="solid" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="bg-muted py-6 text-sm text-muted-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
          <nav className="flex flex-wrap items-center gap-4">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            {/* <Link to="shop" className="hover:underline">
              Shop
            </Link> */}
            <Link to="about" className="hover:underline">
              About
            </Link>
            <Link to="terms" className="hover:underline">
              Terms
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="#" className="hover:text-primary">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link to="#" className="hover:text-primary">
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link to="#" className="hover:text-primary">
              <InstagramIcon className="h-5 w-5" />
            </Link>
          </div>
          <p>&copy; 2024 Grosco. All rights reserved.</p>
        </div>
      </footer>
    </>
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
      stroke="currentColor"
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

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
