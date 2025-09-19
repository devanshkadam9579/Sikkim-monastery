import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Calendar, MapPin, Clock, Ticket, User, Mail, Phone, CreditCard, Download, QrCode } from "lucide-react";

interface FestivalData {
  title: string;
  date: string;
  location: string;
  time: string;
  price: string;
  description: string;
  image: string;
}

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  tickets: number;
  paymentMethod: string;
  specialRequests: string;
}

interface ETicketData {
  ticketId: string;
  festival: FestivalData;
  booking: BookingFormData;
  bookingDate: string;
  totalAmount: number;
  qrCode: string;
}

export const FestivalBooking = ({ festival, isOpen, onClose }: { festival: FestivalData | null; isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<'form' | 'ticket'>('form');
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    tickets: 1,
    paymentMethod: '',
    specialRequests: ''
  });
  const [eTicket, setETicket] = useState<ETicketData | null>(null);

  const handleInputChange = (field: keyof BookingFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateTicketId = () => {
    return 'SK' + Date.now().toString().slice(-8) + Math.random().toString(36).substr(2, 3).toUpperCase();
  };

  const generateQRCode = (ticketId: string) => {
    return `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${ticketId}`;
  };

  const handleBooking = () => {
    if (!festival) return;
    
    const ticketId = generateTicketId();
    const totalAmount = festival.price === 'Free' ? 0 : parseInt(festival.price.replace('₹', '')) * formData.tickets;
    
    const ticketData: ETicketData = {
      ticketId,
      festival,
      booking: formData,
      bookingDate: new Date().toLocaleDateString('en-IN'),
      totalAmount,
      qrCode: generateQRCode(ticketId)
    };
    
    setETicket(ticketData);
    setStep('ticket');
  };

  const handleDownloadTicket = () => {
    if (!eTicket) return;
    
    const ticketContent = `
SIKKIM MONASTERY FESTIVAL - E-TICKET
=====================================

Ticket ID: ${eTicket.ticketId}
Festival: ${eTicket.festival.title}
Date: ${eTicket.festival.date}
Time: ${eTicket.festival.time}
Location: ${eTicket.festival.location}

BOOKING DETAILS:
Name: ${eTicket.booking.fullName}
Email: ${eTicket.booking.email}
Phone: ${eTicket.booking.phone}
Tickets: ${eTicket.booking.tickets}
Total Amount: ₹${eTicket.totalAmount}
Booking Date: ${eTicket.bookingDate}

IMPORTANT NOTES:
- Please arrive 30 minutes before the event
- Bring a valid ID for verification
- This ticket is non-transferable
- For queries, contact: +91-3592-202345

Thank you for supporting Sikkim's cultural heritage!
    `;
    
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `festival-ticket-${eTicket.ticketId}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const resetBooking = () => {
    setStep('form');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      tickets: 1,
      paymentMethod: '',
      specialRequests: ''
    });
    setETicket(null);
  };

  if (!festival) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="text-2xl text-primary flex items-center gap-2">
            <Ticket size={24} />
            Book Festival Ticket
          </DialogTitle>
        </DialogHeader>
        
        <div className="px-6 pb-6 h-full overflow-y-auto">
          {step === 'form' ? (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Festival Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-4xl">{festival.image}</span>
                    <div>
                      <h3 className="text-xl">{festival.title}</h3>
                      <p className="text-sm text-muted-foreground">{festival.description}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span className="font-medium">Date:</span>
                    <span>{festival.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} />
                    <span className="font-medium">Time:</span>
                    <span>{festival.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="font-medium">Location:</span>
                    <span>{festival.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ticket size={16} />
                    <span className="font-medium">Price:</span>
                    <span className="text-2xl font-bold text-primary">{festival.price}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Booking Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="tickets">Number of Tickets *</Label>
                      <Select value={formData.tickets.toString()} onValueChange={(value) => handleInputChange('tickets', parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="paymentMethod">Payment Method *</Label>
                      <Select value={formData.paymentMethod} onValueChange={(value) => handleInputChange('paymentMethod', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="card">Credit/Debit Card</SelectItem>
                          <SelectItem value="upi">UPI Payment</SelectItem>
                          <SelectItem value="netbanking">Net Banking</SelectItem>
                          <SelectItem value="wallet">Digital Wallet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any special requirements or accessibility needs..."
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button onClick={onClose} variant="outline" className="flex-1">
                      Cancel
                    </Button>
                    <Button 
                      onClick={handleBooking} 
                      className="flex-1 btn-monastery"
                      disabled={!formData.fullName || !formData.email || !formData.phone || !formData.paymentMethod}
                    >
                      <CreditCard size={16} className="mr-2" />
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* E-Ticket Display */
            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-primary">
                <CardHeader className="bg-primary text-primary-foreground text-center">
                  <CardTitle className="text-2xl">🎫 E-TICKET</CardTitle>
                  <p className="text-sm opacity-90">Sikkim Monastery Festival</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Ticket Header */}
                    <div className="text-center border-b pb-4">
                      <h2 className="text-2xl font-bold text-primary">{eTicket?.festival.title}</h2>
                      <p className="text-muted-foreground">{eTicket?.festival.description}</p>
                    </div>

                    {/* Ticket Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold text-primary mb-2">Event Details</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Date:</span>
                              <span className="font-medium">{eTicket?.festival.date}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Time:</span>
                              <span className="font-medium">{eTicket?.festival.time}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Location:</span>
                              <span className="font-medium">{eTicket?.festival.location}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Tickets:</span>
                              <span className="font-medium">{eTicket?.booking.tickets}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Total Amount:</span>
                              <span className="font-bold text-primary">₹{eTicket?.totalAmount}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-primary mb-2">Booking Details</h3>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Ticket ID:</span>
                              <span className="font-mono font-medium">{eTicket?.ticketId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Name:</span>
                              <span className="font-medium">{eTicket?.booking.fullName}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Email:</span>
                              <span className="font-medium">{eTicket?.booking.email}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Phone:</span>
                              <span className="font-medium">{eTicket?.booking.phone}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-muted-foreground">Booking Date:</span>
                              <span className="font-medium">{eTicket?.bookingDate}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* QR Code */}
                      <div className="text-center">
                        <h3 className="font-semibold text-primary mb-2">QR Code</h3>
                        <div className="bg-white p-4 rounded-lg border-2 border-dashed border-muted">
                          <img 
                            src={eTicket?.qrCode} 
                            alt="QR Code" 
                            className="mx-auto mb-2"
                          />
                          <p className="text-xs text-muted-foreground">Scan for verification</p>
                        </div>
                      </div>
                    </div>

                    {/* Important Notes */}
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h3 className="font-semibold text-primary mb-2">Important Notes</h3>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Please arrive 30 minutes before the event</li>
                        <li>• Bring a valid ID for verification</li>
                        <li>• This ticket is non-transferable</li>
                        <li>• For queries, contact: +91-3592-202345</li>
                        <li>• Dress modestly and remove shoes before entering temple areas</li>
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button onClick={handleDownloadTicket} className="flex-1">
                        <Download size={16} className="mr-2" />
                        Download Ticket
                      </Button>
                      <Button onClick={resetBooking} variant="outline" className="flex-1">
                        Book Another
                      </Button>
                      <Button onClick={onClose} variant="outline">
                        Close
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

