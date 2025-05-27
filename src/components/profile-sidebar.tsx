import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Twitter, Github, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProfileSidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      <div className="flex flex-col items-center">
        <div className="relative w-40 h-40 overflow-hidden rounded-lg bg-yellow-400">
          <Image
            src="/placeholder.svg?height=160&width=160"
            alt="Profile picture"
            width={160}
            height={160}
            className="object-cover"
            priority
          />
        </div>

        <h1 className="mt-4 text-2xl font-bold">Beatrice Wambui</h1>
        <p className="text-gray-500 dark:text-gray-400">FullStack Developer</p>

        <div className="flex space-x-2 mt-4">
          <Link
            href="https://facebook.com"
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Facebook className="h-5 w-5 text-blue-600" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            href="https://linkedin.com"
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Linkedin className="h-5 w-5 text-blue-700" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://twitter.com"
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Twitter className="h-5 w-5 text-blue-400" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://github.com"
            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>

        <div className="w-full mt-8 space-y-4">
          <div className="flex items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mr-3">
              <Phone className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Phone</p>
              <p className="text-sm">+254723909353</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mr-3">
              <Mail className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
              <p className="text-sm break-all">beatricewambuimbugua@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md mr-3">
              <MapPin className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
              <p className="text-sm">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600">Download Resume</Button>
      </div>
    </div>
  )
}
