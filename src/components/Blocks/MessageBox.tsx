import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaMessage } from "react-icons/fa6";
import { Textarea } from "../ui/textarea";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/app/utils/Firebase/firebase';
import { toast } from "sonner"

import { AiOutlineLoading3Quarters } from "react-icons/ai";
export function MessageBox() {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setLoading(true);
      
        try {
            await addDoc(collection(db, 'feedback'), {
                name,
                message,
                timestamp: new Date(),
            });
            console.log(name);
            toast("TailFusion", {
                description: "Message sent successfully!",
            })
            setLoading(false);
            setName('');
            setMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setLoading(false);
            toast("TailFusion", {
                description: "Failed to send message. Please try again.",
            })
        }

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="none">
                    <FaMessage className='text-[#fff2c1] dark:text-black' size={45} />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Feedback</DialogTitle>
                    <DialogDescription>
                        <p className="text-2xl">
                            Hi there 👋
                            <span> How can we help?</span>
                        </p>
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-left">Name</Label>
                        <Input
                            id="name"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-left">Message</Label>
                        <Textarea
                            id="message"
                            placeholder="Type your message here."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                    <DialogFooter>


                        <Button type="submit" className="dark:bg-white">Send Message {loading && <AiOutlineLoading3Quarters size={20} className='animate-spin ml-2' color='#ffffff dark:black' />}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
