import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    email: z.string().email("Invalid email address"),
    eventType: z.string().min(1, "Please select an event type"),
    eventDate: z.string().min(1, "Please select a date and time"),
    message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const eventTypes = [
    "Wedding",
    "Engagement",
    "Muhurat / Muhurtham",
    "Reception",
    "Birthday Party",
    "Half Saree / Dhoti Function",
    "Baby Shower",
    "Anniversary",
    "Corporate Event",
    "Photography / Pre-wedding Shoot",
    "Other",
];

const PHONE = "7382525028";

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            eventType: "",
            eventDate: "",
            message: "",
        },
    });

    const onSubmit = (values: FormValues) => {
        const text = `Hi Venko Wedding Planners, I would like to book an event.
    
*Details:*
Name: ${values.name}
Phone: ${values.phone}
Email: ${values.email}
Event Type: ${values.eventType}
Event Date/Time: ${values.eventDate}
Message: ${values.message || "No additional message"}`;

        const waLink = `https://wa.me/91${PHONE}?text=${encodeURIComponent(text)}`;
        window.open(waLink, "_blank");
        toast.success("Redirecting to WhatsApp...");
        onClose();
        form.reset();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px] glass-dark border-primary/20 text-white max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display text-gradient-gold uppercase tracking-wider">Book Your Event</DialogTitle>
                    <DialogDescription className="text-muted-foreground font-body">
                        Fill in the details below and we'll get back to you on WhatsApp.
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-primary/20 focus:border-primary" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Phone Number</FormLabel>
                                        <FormControl>
                                            <Input placeholder="10-digit Number" {...field} className="bg-white/5 border-primary/20 focus:border-primary" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Email" {...field} className="bg-white/5 border-primary/20 focus:border-primary" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="eventType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Event Type</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="bg-white/5 border-primary/20 focus:border-primary">
                                                <SelectValue placeholder="Select Event Type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="bg-black/90 border-primary/20 text-white">
                                            {eventTypes.map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="eventDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Event Date & Time</FormLabel>
                                    <FormControl>
                                        <Input type="datetime-local" {...field} className="bg-white/5 border-primary/20 focus:border-primary text-white [color-scheme:dark]" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-primary/80 uppercase tracking-tighter text-xs">Message (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Tell us more about your event..."
                                            className="bg-white/5 border-primary/20 focus:border-primary min-h-[100px]"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-gradient-gold text-primary-foreground font-display font-bold uppercase tracking-widest py-6 hover:opacity-90 transition-all">
                            Send Now
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
