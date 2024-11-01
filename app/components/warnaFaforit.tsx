"use client";

import React, { useState, useEffect } from "react";

export default function WarnaFavorit() {
  const [warna, setWarna] = useState("blue");

  const pilihanWarna = ["black", "brown", "white"];

  useEffect(() => {
    document.body.style.backgroundColor = warna;
  }, [warna]);

  return (
    <section>
      <h1 className="text-center">Pilih Warna</h1>

      {/* Pilihan warna */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {pilihanWarna.map((warnaPilihan) => (
          <button
            key={warnaPilihan}
            onClick={() => setWarna(warnaPilihan)}
            style={{
              backgroundColor: warnaPilihan,
              color: warnaPilihan.toLowerCase() === "white" ? "black" : "white", // Warna teks hitam untuk latar belakang putih
              padding: "10px",
              margin: "0 10px",
              border: "none",
              cursor: "pointer",
              borderRadius: "5px", // Tambahkan border-radius untuk estetika
              boxShadow: warna === warnaPilihan ? "0 0 10px rgba(0, 0, 0, 0.3)" : "none" // Sorotan jika tombol dipilih
            }}
          >
            {warnaPilihan.toUpperCase()}
          </button>
        ))}
      </div>
    </section>
  );
}
