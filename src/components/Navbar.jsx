import {
    Navbar,
    Typography,
    IconButton,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon,MagnifyingGlassIcon } from "@heroicons/react/24/solid";
  
  export function NavbarDark() {
    return (
      <Navbar
        color="white"
        className="bg-white border-b border-gray-200 px-4 py-3"
      >
        <div className="flex items-center justify-between w-full text-blue-gray-800">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 cursor-pointer py-1.5"
          >
            Products
          </Typography>
          <div className="flex items-center gap-4">
            <div className="relative">
            <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
              
            </div>
            <IconButton variant="text" color="blue-gray" className="shadow-md">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton variant="text" color="blue-gray" className="shadow-md">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div>
        </div>
      </Navbar>
    );
  }
