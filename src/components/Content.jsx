import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Checkbox
} from "@material-tailwind/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { InboxArrowDownIcon } from "@heroicons/react/24/outline";

const TABLE_HEAD = ["Brand", "Description", "members", "categories", "Next meeting"];

const TABLE_ROWS = [
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
        name: "Spotify",
        amount: "$2,500",
        date: "Wed 3:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
        meeting:"in 1 hour"
    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
        name: "Amazon",
        amount: "$5,000",
        date: "Wed 1:00pm",
        status: "paid",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
        meeting:"not in contact"

    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
        name: "Pinterest",
        amount: "$3,400",
        date: "Mon 7:40pm",
        status: "pending",
        account: "master-card",
        accountNumber: "1234",
        expiry: "06/2026",
        meeting:"not in contact"

    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
        name: "Google",
        amount: "$1,000",
        date: "Wed 5:00pm",
        status: "paid",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
        meeting:"in 1 hour"

    },
    {
        img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
        name: "netflix",
        amount: "$14,000",
        date: "Wed 3:30am",
        status: "cancelled",
        account: "visa",
        accountNumber: "1234",
        expiry: "06/2026",
        meeting:"in 1 hour"

    },
];

export function TransactionsTable() {
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div className="flex w-max gap-4">
                        <Menu>
                            <MenuHandler>
                                <button className="select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"> <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
                                    ⌘
                                </span>All Brands
                                    <span>▼</span></button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuHandler>
                                <Button className="select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"> Desk
                                    <span>▼</span></Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuHandler>
                                <Button className="select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Tags
                                    <span>▼</span></Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Menu Item 1</MenuItem>
                                <MenuItem>Menu Item 2</MenuItem>
                                <MenuItem>Menu Item 3</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button className="flex items-center select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <span className="mr-2"><ArrowsUpDownIcon className="h-5 w-5" /></span>
                            Sort
                        </Button>
                        <Button className="flex items-center select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            <span className="mr-2"><AdjustmentsHorizontalIcon className="h-5 w-5" /></span>
                            Filter
                        </Button>

                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        {/* <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div> */}
                        <Button className="flex items-center select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" size="sm">
                            <PlusCircleIcon strokeWidth={2} className="h-4 w-4" /> Meeting
                        </Button>
                        <Button className="flex items-center select-none rounded-lg bg-white-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" size="sm">
                            <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" /> Import / Export
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {/* Add a checkbox column */}
                            <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-4">
                                <Checkbox />
                            </th>

                            {/* Render table head columns */}
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            (
                                {
                                    img,
                                    name,
                                    amount,
                                    date,
                                    status,
                                    account,
                                    accountNumber,
                                    expiry,
                                    meeting,
                                },
                                index,
                            ) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (

                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <tr className=""> <Checkbox /></tr>
                                                <Avatar
                                                    src={img}
                                                    alt={name}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {amount}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={status}
                                                    color={
                                                        status === "paid"
                                                            ? "green"
                                                            : status === "pending"
                                                                ? "amber"
                                                                : "red"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                                                    <Avatar
                                                        src={
                                                            account === "visa"
                                                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                                        }
                                                        size="sm"
                                                        alt={account}
                                                        variant="square"
                                                        className="h-full w-full object-contain p-1"
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal capitalize"
                                                    >
                                                        {account.split("-").join(" ")} {accountNumber}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        {expiry}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        {/* <td className={classes}>
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td> */}
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    size="sm"
                                                    variant="ghost"
                                                    value={meeting}
                                                    color={
                                                        meeting === "in 1 hour"
                                                            ? "green"
                                                            : meeting === "not in contact"
                                                                ? "amber"
                                                                : "red"
                                                    }
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Button variant="outlined" size="sm">
                    Previous
                </Button>
                <div className="flex items-center gap-2">
                    <IconButton variant="outlined" size="sm">
                        1
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        2
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        3
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        ...
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        8
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        9
                    </IconButton>
                    <IconButton variant="text" size="sm">
                        10
                    </IconButton>
                </div>
                <Button variant="outlined" size="sm">
                    Next
                </Button>
            </CardFooter>
        </Card>
    );
}