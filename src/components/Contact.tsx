import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="animate-slide-up bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action="https://formsubmit.co/blu903393@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New portfolio contact message" />
                <input type="hidden" name="_next" value="/" />
                <input type="text" name="_honey" className="hidden" />
                <div>
                  <Label htmlFor="name" className="text-card-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-card-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-card-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" variant="hero">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="animate-scale-in">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-skill-gradient rounded-lg shadow-glow">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground">blu903393@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-skill-gradient rounded-lg shadow-glow">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-skill-gradient rounded-lg shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <Card className="mt-8 bg-card-gradient border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4">
                  Quick Response Time
                </h3>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours. For urgent inquiries, 
                  feel free to reach out via phone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;