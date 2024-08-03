import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaMessage } from "react-icons/fa6"
import { Textarea } from "../ui/textarea"

export function MessageBox() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="none"><FaMessage className='text-[#fff2c1] dark:text-black' size={45} /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription>
                        <h1 className="text-2xl">
                            Hi there 👋
                            <span>
                                How can we help?
                            </span>
                        </h1>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Name"
                            defaultValue="Sunny Srivastava"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-left">
                            Message
                        </Label>
                        <Textarea id="username" className="col-span-3" defaultValue="TailFusion is love" placeholder="Type your message here." />

                    </div>
                </div>
                <DialogFooter>
                    <Button className="dark:bg-white" type="submit">Send Message</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
