import Hero from "./components/hero";
import PersonalInfo from "./components/PersonalInfo";
import RiwayatPendidikan from "./components/riwayatpendidikan";
import RowRiwayat from "./components/rowRiwayat";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import RowPekerjaan from "./components/rowPekerjaan";
import Skills from "./components/Skills";
import "./style.css";
import WarnaFavorit from "./components/warnaFaforit";
import ContactForm from "./components/ContactForm";
import GalleryHobbies from "./components/Gallery";

export default function Gallery() {
  return (
    <section>
      <Hero />
      <PersonalInfo />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <Skills />
      <GalleryHobbies />
      <WarnaFavorit />
      <ContactForm />
    </section>
  );
}