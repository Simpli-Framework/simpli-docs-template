"use client";

import React, { useState } from "react";
import { Button } from "./button";
import { Origami, Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { CodeBlock } from "./code-block";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "./sidebar";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={cn("sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <SidebarTrigger>
            <div className="rounded-lg border bg-background p-2 hover:bg-accent">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </SidebarTrigger>
          <div className="flex items-center space-x-2">
            <Origami className="h-8 w-8" />
            <span className="text-2xl font-bold">Simpli Docs</span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-base">Releases</Button>
          <Button variant="ghost" className="text-base">About</Button>
          <Button variant="ghost" className="text-base">FAQ</Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="text-base">
                Our CLI
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[400px] sm:w-[500px]">
              <div className="p-4">
                <CodeBlock code="npx simpli-frontend my-project" />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-col space-y-2 p-4">
            <Button variant="ghost" className="text-base w-full justify-start">Releases</Button>
            <Button variant="ghost" className="text-base w-full justify-start">About</Button>
            <Button variant="ghost" className="text-base w-full justify-start">FAQ</Button>
            <div className="w-full p-4 border rounded-lg bg-background/95">
              <CodeBlock code="npx simpli-frontend my-project" />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
} 