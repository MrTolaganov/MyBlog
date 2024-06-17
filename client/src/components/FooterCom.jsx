import { Link } from "react-router-dom";
import { Footer } from "flowbite-react";
import { GrProjects } from "react-icons/gr";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandBlogger } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlinePrivacyTip } from "react-icons/md";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Otabek&#x2019;s
              </span>
              Blog
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/MrTolaganov?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-1">
                    <GrProjects />
                    My JS Projects
                  </span>
                </Footer.Link>
                <Footer.Link href="/about" target="_blank" rel="noopener noreferrer">
                  <span className="flex items-center gap-1">
                    <TbBrandBlogger />
                    Otabek&#x2019;s blog
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Contact me" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://t.me/tulaganovok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-1">
                    <LiaTelegramPlane />
                    Telegram
                  </span>
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/Otabek-%D1%82ulaganov-143106294/"
                  target="_blank"
                >
                  <span className="flex items-center gap-1">
                    <CiLinkedin />
                    Linkedin
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">
                  <span className="flex items-center gap-1">
                    <MdOutlinePrivacyTip />
                    Privacy Policy
                  </span>
                </Footer.Link>
                <Footer.Link href="#">
                  <span className="flex items-center gap-1">
                    <TbAirConditioning />
                    Terms &amp; Conditions
                  </span>
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />

        <div className="w-full sm:flex sm:items-center sm:justify-center">
          <Footer.Copyright
            href="#"
            by={`Otabek's blog. All rights preserved. ${new Date().getFullYear()}`}
          />
        </div>
      </div>
    </Footer>
  );
}
