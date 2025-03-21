import Images from "next/image";
import logoImage from "@/assets/images/logo.svg";
import menubarImage from "@/assets/images/menubar.svg";
import Button from "@/components/Button";

const navlinks = [
    {label: 'Home', href: '/'}, 
    {label: 'Features', href: '/features'},
    {label: 'Integrations', href: '/integrations'},
    {label: 'FAQs', href: '/faqs'}, 
];

export default function Navbar() {
      return <section className="py-4 lg:py-8">
        <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-2  lg:grid-cols-3 border border-white/15 rounded-full  p-2  px-4 md:pr-2 items-center">
                <div>
                     <Images src = {logoImage} alt="Layers logo" className="h-9 md:h-auto w-auto " />
                </div>
                <div className="lg:flex justify-center items-center hidden">
                    <nav className="flex gap-6 font-medium">
                        {navlinks.map((link, index) => (
                            <a href={link.href} key = {link.label}>{link.label}</a>
                           ))}
                    </nav>
                </div>
                <div className="flex justify-end gap-4">
                    <Images src = {menubarImage} alt="menu" className=" feather feather-menu w-6 h-6 md:hidden" />
                    <Button variant="secondary" className="hidden md:inline-flex items-center">Log in</Button>
                    <Button variant="primary" className="hidden md:inline-flex items-center">Sign up</Button>
               
                </div>
            </div>
        </div>
      </section>
}