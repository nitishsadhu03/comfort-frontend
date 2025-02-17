/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import {
  fetchLocations,
  fetchStores,
  fetchServices,
  sendOtp,
  verifyOtp,
  bookAppointment,
} from "@/utils/api";

interface Location {
  id: number;
  name: string;
}

interface Store {
  id: number;
  name: string;
}

interface Service {
  id: number;
  name: string;
  price: number;
}

const AppointmentBooking = () => {
  // Form state
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [isOtpDialogOpen, setIsOtpDialogOpen] = useState(false);

  // Data state
  const [locations, setLocations] = useState<Location[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  // Selection state - Updated types to match the data
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");

  // UI state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const timeSlots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  useEffect(() => {
    const loadLocations = async () => {
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (err) {
        setError("Failed to load locations");
      }
    };
    loadLocations();
  }, []);

  useEffect(() => {
    const loadStores = async () => {
      if (!selectedLocation) return;
      try {
        const data = await fetchStores(selectedLocation);
        setStores(data);
      } catch (err) {
        setError("Failed to load stores");
      }
    };
    loadStores();
  }, [selectedLocation]);

  useEffect(() => {
    const loadServices = async () => {
      if (!selectedStore) return;
      try {
        const data = await fetchServices();
        setServices(data);
      } catch (err) {
        setError("Failed to load services");
      }
    };
    loadServices();
  }, [selectedStore]);

  const handleSendOtp = async () => {
    if (!mobile || !name) {
      setError("Please enter both name and mobile number");
      return;
    }
    try {
      setIsLoading(true);
      await sendOtp(mobile);
      setIsOtpDialogOpen(true);
      setError("");
    } catch (err) {
      setError("Failed to send OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setIsLoading(true);
      await verifyOtp(mobile, otp);
      setIsVerified(true);
      setIsOtpDialogOpen(false);
      setError("");
    } catch (err) {
      setError("Invalid OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isVerified) {
      setError("Please verify your mobile number first");
      return;
    }

    try {
      setIsLoading(true);
      await bookAppointment({
        data: {
          name,
          mobile,
          location: selectedLocation,
          store: selectedStore,
          services: selectedServices,
          timeSlot: {
            time: selectedTimeSlot,
            date: new Date().toISOString().split("T")[0],
          },
        },
      });
      setSuccess("Appointment booked successfully!");
    } catch (err) {
      setError("Failed to book appointment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-secondary-foreground text-white p-12">
      <Card className="max-w-2xl mx-auto bg-gray-900 shadow-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">
            Book Appointment
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Fill in your details to schedule an appointment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Input
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                />
              </div>

              <div className="flex gap-2">
                <Input
                  placeholder="Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white"
                  disabled={isVerified}
                />
                {isVerified ? (
                  <Badge className="bg-green-600 text-white hover:bg-green-500">
                    <CheckCircle className="w-4 h-4 mr-1" /> Verified
                  </Badge>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    className=""
                    disabled={isLoading}
                  >
                    Send OTP
                  </Button>
                )}
              </div>
            </div>

            {isVerified && (
              <div className="space-y-4">
                <Select
                  onValueChange={(value) => setSelectedLocation(Number(value))}
                  value={selectedLocation?.toString()}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    {locations.map((loc) => (
                      <SelectItem key={loc.id} value={loc.id.toString()}>
                        {loc.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedLocation && (
                  <Select
                    onValueChange={(value) => setSelectedStore(Number(value))}
                    value={selectedStore?.toString()}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select Store" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-700 text-white">
                      {stores.map((store) => (
                        <SelectItem key={store.id} value={store.id.toString()}>
                          {store.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}

                {selectedStore && (
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-zinc-300">
                      Select Services
                    </h3>
                    <div className="space-y-2">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className="flex items-center space-x-2 text-sm text-white"
                        >
                          <input
                            type="checkbox"
                            value={service.id}
                            checked={selectedServices.includes(service.id)}
                            onChange={(e) => {
                              const serviceId = Number(e.target.value);
                              setSelectedServices((prev) =>
                                e.target.checked
                                  ? [...prev, serviceId]
                                  : prev.filter((id) => id !== serviceId)
                              );
                            }}
                            className="text-primary bg-gray-800 border-gray-700"
                          />
                          <span>
                            {service.name} - ₹{service.price}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                <Select
                  onValueChange={setSelectedTimeSlot}
                  value={selectedTimeSlot}
                >
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Select Time Slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white">
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Booking..." : "Book Appointment"}
                </Button>
              </div>
            )}

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}
          </form>
        </CardContent>
      </Card>

      <Dialog open={isOtpDialogOpen} onOpenChange={setIsOtpDialogOpen}>
        <DialogContent className="bg-gray-900 border-primary">
          <DialogHeader>
            <DialogTitle className="text-white">Enter OTP</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-gray-800 border-gray-700 text-white"
            />
            <Button
              onClick={handleVerifyOtp}
              className="w-full"
              disabled={isLoading}
            >
              Verify OTP
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AppointmentBooking;
