import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddJSBootstrap from "./_components/addJSBootstrap.js";
import { georgia } from "./_components/fonts.js";
import LineDecoration from "./_components/lineDecoration";
import Navbar from "./_components/navbar.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faTwitter, faFontAwesome);
const georgiaFont = georgia.variable;

export const metadata = {
  title: "Jasa Waterproofing Terpercaya | PT. Qiyyama Aretha Solution",
  description: "PT. Qiyyama Aretha Solution Jasa Waterproofing Terpercaya",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={georgiaFont}>
        <AddJSBootstrap />
        <LineDecoration />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
