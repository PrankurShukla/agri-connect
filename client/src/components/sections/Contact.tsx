import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  involvement: z.string({ required_error: "Please select how you'd like to get involved" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
  newsletter: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      involvement: "",
      message: "",
      newsletter: true,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/contact", data);
      
      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Message sent!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        form.reset();
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-semibold">JOIN OUR MISSION</span>
              <h2 className="text-3xl md:text-4xl font-bold font-poppins mt-2 mb-6">
                Be Part of the Agricultural Revolution
              </h2>
              
              <p className="text-gray-700 mb-6">
                We're looking for passionate individuals and organizations who want to contribute to transforming Indian agriculture. Whether you're a:
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span>Technology professional with expertise in mobile apps, IoT, AI or data science</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span>Agricultural expert with deep understanding of farming challenges</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span>Entrepreneur or business leader interested in rural innovation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span>Investor looking to support impactful agricultural solutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mt-1 mr-3 h-5 w-5" />
                  <span>Organization working in agricultural or rural development</span>
                </li>
              </ul>
              
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=600&h=400" 
                alt="Tech professionals and farmers collaborating" 
                className="rounded-xl shadow-lg mb-6"
              />
              
              <Card className="bg-light">
                <CardContent className="p-5">
                  <h3 className="font-bold text-lg mb-2">Join us in this journey to:</h3>
                  <p className="mb-4">
                    Create sustainable solutions that improve the lives of millions of Indian farmers while building a successful, impactful business.
                  </p>
                  <div className="flex items-center">
                    <span className="text-primary mr-3">✉</span>
                    <a href="mailto:contact@agriconnect.in" className="text-primary hover:underline">
                      shuklaprankur27@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-light rounded-xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins mb-6">Get Involved</h3>
                
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="bg-success/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-10 w-10 text-success" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-gray-700 mb-6">
                      Your message has been received. We'll get back to you soon.
                    </p>
                    <Button
                      onClick={() => setIsSuccess(false)}
                      className="bg-primary hover:bg-primary/90 text-white"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
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
                            <FormLabel className="text-gray-700 font-medium">Email</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="email"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Phone (optional)</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                type="tel"
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="involvement"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">How would you like to get involved?</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
                                  <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="technology">Technology Contribution</SelectItem>
                                <SelectItem value="agriculture">Agricultural Expertise</SelectItem>
                                <SelectItem value="business">Business Partnership</SelectItem>
                                <SelectItem value="investment">Investment Interest</SelectItem>
                                <SelectItem value="organization">Organizational Collaboration</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 font-medium">Message</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                rows={4}
                                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="newsletter"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 mb-6">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="h-5 w-5 text-primary focus:ring-primary"
                              />
                            </FormControl>
                            <FormLabel className="text-gray-700 font-normal">
                              Subscribe to our newsletter for updates
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-md shadow-lg"
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
