
import Link from "next/link"

export function Footer() {
  return (
    (<footer className="bg-gray-100 py-12 dark:bg-gray-800">
      <div
        className="container mx-auto grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 lg:max-w-7xl">
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Company Info</h4>
          <div className="grid gap-2 text-gray-600 dark:text-gray-400">
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="/About">
              <InfoIcon className="h-5 w-5" />
              About
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <PhoneIcon className="h-5 w-5" />
              Contact
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <BriefcaseIcon className="h-5 w-5" />
              Careers
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Customer Support</h4>
          <div className="grid gap-2 text-gray-600 dark:text-gray-400">
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <FileQuestionIcon className="h-5 w-5" />
              FAQs
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <RefreshCwIcon className="h-5 w-5" />
              Returns & Refunds
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <TruckIcon className="h-5 w-5" />
              Shipping Info
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Shop</h4>
          <div className="grid gap-2 text-gray-600 dark:text-gray-400">
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <PackageIcon className="h-5 w-5" />
              Product Categories
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <StarIcon className="h-5 w-5" />
              Featured Products
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <FlameIcon className="h-5 w-5" />
              New Arrivals
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Account</h4>
          <div className="grid gap-2 text-gray-600 dark:text-gray-400">
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <LogInIcon className="h-5 w-5" />
              Login
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <LogInIcon className="h-5 w-5" />
              Register
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <HistoryIcon className="h-5 w-5" />
              Order History
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Legal</h4>
          <div className="grid gap-2 text-gray-600 dark:text-gray-400">
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <FileIcon className="h-5 w-5" />
              Terms of Service
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <LockIcon className="h-5 w-5" />
              Privacy Policy
            </Link>
            <Link
              className="flex items-center gap-2 hover:text-gray-900 dark:hover:text-gray-200"
              href="#">
              <AccessibilityIcon className="h-5 w-5" />
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>)
  );
}

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>)
  );
}


function BriefcaseIcon(props) {
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
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>)
  );
}


function FileQuestionIcon(props) {
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
      <path d="M12 17h.01" />
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z" />
      <path d="M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3" />
    </svg>)
  );
}


function FlameIcon(props) {
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
      <path
        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>)
  );
}


function HistoryIcon(props) {
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
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>)
  );
}


function InfoIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>)
  );
}


function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>)
  );
}


function LogInIcon(props) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>)
  );
}


function PackageIcon(props) {
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
      <path d="m7.5 4.27 9 5.15" />
      <path
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>)
  );
}


function PhoneIcon(props) {
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
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function RefreshCwIcon(props) {
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
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>)
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


function TruckIcon(props) {
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path
        d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>)
  );
}
