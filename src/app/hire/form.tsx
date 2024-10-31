"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
 
  FormField,
  FormItem,
  FormLabel,
 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";




// Define the schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),

  email: z.string().email({
    message: "Please enter a valid email address.",
  }),

  message: z.string().min(5, {
    message: "Message must be at least 5 characters.",
  }),
});

export default function ContactForm() {
  // Set up the form with useForm and zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = ({...field}:any) => {
   
  };

  return (
    <Form {...form}>
  <div className="flex justify-center items-center mt-20 w-full max-w-lg h-auto min-h-[30rem] sm:w-[30rem] sm:h-[30rem] rounded-xl bg-transparent shadow-lg shadow-fuchsia-300">
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="username"
       
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl font-medium text-slate-50">Username</FormLabel>
        
            <FormControl>
              <Input placeholder="Enter Your Full Name" {...field} 
              className="text-base font-thin text-slate-300"/>
            </FormControl>
            
          </FormItem>
        )}
      />

      {/* Email ID */}

<FormField
        control={form.control}
        name="email"
       
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl font-medium text-slate-50">Email</FormLabel>
        
            <FormControl>
            <Input placeholder="Email" {...field} 
              className="text-base font-thin text-slate-300"/>
            </FormControl>
            
          </FormItem>
        )}
      />

 {/* Text Area */}
<FormField
        control={form.control}
        name="text area"
       
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-xl font-medium text-slate-50">Message</FormLabel>
        
            <FormControl className="text-base font-thin text-slate-300">
            <Textarea placeholder="Type your message here." {...field} 
              className="text-base font-thin text-slate-300"/>
            </FormControl>
            
          </FormItem>
        )}
      />
      <Button type="submit"
      className="w-[7rem] sm:w-[8rem] md:w-[9rem] h-[2rem] md:h-[2.5rem] bg-[#b05695] rounded-full mx-4 md:mx-6 border-solid shadow-lg shadow-fuchsia-400 text-slate-50
      text-sm font-medium text-wrap sm:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      Connect
      </Button>
    </form>
  </div>
</Form>
  );
}

// h-[30rem]
// flex justify-center items-center mt-[5rem] w-[30rem] h-[30rem] rounded-xl bg-transparent shadow-lg shadow-fuchsia-300