
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, User, MessageSquare, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

interface ContactFormProps {
  onSubmit: (data: z.infer<typeof formSchema>) => void;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <div className="bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20">
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
        Let's Connect
      </h2>
      <p className="text-gray-600 mb-8">Fill out the form and we'll be in touch soon.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Name
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field}
                    className="border-0 bg-white/50 backdrop-blur-sm focus:bg-white/80 transition-all duration-300 shadow-sm py-6"
                  />
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
                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder="your@email.com" 
                    type="email" 
                    {...field}
                    className="border-0 bg-white/50 backdrop-blur-sm focus:bg-white/80 transition-all duration-300 shadow-sm py-6"
                  />
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
                <FormLabel className="text-gray-700 font-medium flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] border-0 bg-white/50 backdrop-blur-sm focus:bg-white/80 transition-all duration-300 shadow-sm resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary via-primary-dark to-primary hover:opacity-90 transition-all duration-300 text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
