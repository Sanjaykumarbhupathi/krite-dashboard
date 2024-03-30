import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Input,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    UserPlusIcon,
    BellIcon,
    CodeBracketIcon,
    MegaphoneIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    QuestionMarkCircleIcon,
    PlusCircleIcon,
    PlusIcon,
    FolderIcon

} from "@heroicons/react/24/outline";

export function SidebarWithCta() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="sidebar  w-[18rem] bg-white border-r border-gray-200 flex flex-col justify-between">
            <Card className="p-4">
            <div className="flex items-center justify-between">
    <div className="mb-2 flex-start flex items-center">
        <img
            className="h-8 w-8 rounded object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image"
        />
    </div>
    <div className="flex flex-col justify-center ml-[-4]">
        <span className="text-small">INC</span>
        <Typography variant="h5" color="blue-gray" className="-mt-1">
            Innovation Hub
        </Typography>
    </div>
    <div className="flex-end">
        <img
            className="h-8 w-8 rounded-full object-cover object-center"
            src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
            alt="nature image rounded"
        />
    </div>
</div>
<ListItem>
                        <ListItemPrefix>
                            <BellIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Design Team
                        <ListItemSuffix>
                        <span className="mr-0.5 inline-block translate-y-[1.5px] text-base border-r rounded bg-white shadow-md p-1">
                                    ⌘ + 1
                                </span>                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <MegaphoneIcon className="h-5 w-5" />
                        </ListItemPrefix>
                    Marketing Team
                        <ListItemSuffix>
                        <span className="mr-0.5 inline-block translate-y-[1.5px] text-base border-r rounded bg-white shadow-md p-1">
                                    ⌘ + 2
                                </span>                        </ListItemSuffix>
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <CodeBracketIcon className="h-5 w-5" />
                        </ListItemPrefix>
                    Development Team
                        <ListItemSuffix>
                        <span className="mr-0.5 inline-block translate-y-[1.5px] text-base border-r rounded bg-white shadow-md p-1">
                                    ⌘ + 3
                                </span>                        </ListItemSuffix>
                    </ListItem>
                <List>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem>
                        <ListItemPrefix>
                            <PlusCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                    Create Team
                    </ListItem>
                    <hr className="my-2 border-blue-gray-50" />
                    <ListItem>
                    Folders
                    <ListItemSuffix>
                    <PlusIcon className="h-5 w-5" />
                    </ListItemSuffix>
                    </ListItem>
                    <Accordion
                        open={open === 1}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""
                                    }`}
                            />
                        }
                    >
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <FolderIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Products
                            </Typography>
                        </AccordionHeader>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    Roadmap
                                </ListItem>
                                <ListItem>
                                    Feedback
                                </ListItem>
                                <ListItem>
                                    Performance
                                </ListItem>
                                <ListItem>
                                    Team
                                </ListItem>
                                <ListItem>
                                    Analytics
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <PlusIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Add new Sub
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""
                                    }`}
                            />
                        }
                    >
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <FolderIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Sales
                            </Typography>
                        </AccordionHeader>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Orders
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Products
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <FolderIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Sales
                            </Typography>
                        </AccordionHeader>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Orders
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Products
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                    <Accordion>
                    <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <FolderIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Design
                            </Typography>
                        </AccordionHeader>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Orders
                                </ListItem>
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Products
                                </ListItem>
                            </List>
                        </AccordionBody>
                    </Accordion>
                </List>
                <hr />
                <div className="p-4">
                    <List>
                        <ListItem>
                            <ListItemPrefix>
                                <UserPlusIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Invite teammates
                        </ListItem>
                        <ListItem>
                            <ListItemPrefix>
                                <QuestionMarkCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            Help and first Steps
                        </ListItem>
                        <div className="relative flex w-full max-w-[18rem]">
                            <Input
                                type="text"
                                label="7 Days left on trial "
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <Button
                                size="sm"
                                color="blue-gray"
                                className="!absolute right-1 top-1 rounded"
                            >
                                Add Billing
                            </Button>
                        </div>
                    </List>
                </div>
            </Card>
        </div>
    );
}
