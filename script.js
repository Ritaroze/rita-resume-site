document.addEventListener("DOMContentLoaded", () => {

  /* ===== Timeline 展開收合 ===== */
  document.querySelectorAll(".timeline-item .toggle").forEach(toggleEl => {
    toggleEl.addEventListener("click", () => {
      toggleEl.parentElement.classList.toggle("open");
    });
  });

  /* ===== 回到頁首按鈕 ===== */
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) backToTopBtn.classList.add("show");
    else backToTopBtn.classList.remove("show");
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ===== 語言切換（先保留結構，不會報錯）===== */
  const translations = {
    zh: {
      about_title: "關於我 About Me",
      skills_title: "核心能力 Skills",
      exp_title: "工作經歷 Experience",
      proj_title: "專案亮點 Projects",
      traits_title: "個人特質與自我期許 Traits & Goals",
      contact_title: "聯絡方式 Contact",
    },
    en: {
      about_title: "About Me",
      skills_title: "Core Skills",
      exp_title: "Experience",
      proj_title: "Projects",
      traits_title: "Traits & Career Goals",
      contact_title: "Contact",
    }
  };

  let currentLang = "zh";
  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      currentLang = currentLang === "zh" ? "en" : "zh";
      Object.keys(translations[currentLang]).forEach(key => {
        const el = document.querySelector(`[data-i18n='${key}']`);
        if (el) el.textContent = translations[currentLang][key];
      });
    });
  }

  /* ===== Extra Course Links (Google Drive) ===== */
  const extraLinks = [
    "https://drive.google.com/file/d/1nrPoVtFJe84cJXaeEXjdAgcwOGh9oInO/view?usp=drive_link",
    "https://drive.google.com/file/d/1T7F08DuaoGXM2VYVYTPV2Iy4cPTFilia/view?usp=drive_link",
    "https://drive.google.com/file/d/16P_spkN5qIb3iZNYH3Dusa2K2wh5ug38/view?usp=drive_link",
    "https://drive.google.com/file/d/1b3dxbWBJhCgRJF_fRqL8ArFoEY1W36Xv/view?usp=drive_link",
    "https://drive.google.com/file/d/1NGloCegl_Iaew3ZPae2RH3if1wlUQvxZ/view?usp=drive_link",
    "https://drive.google.com/file/d/1x9VoVAc_yDcYTl13rZF08zlluFEJCKub/view?usp=drive_link",
    "https://drive.google.com/file/d/1MN6N8zgYh1dJRGLmnKNtrc6tcuIJrVKX/view?usp=drive_link",
    "https://drive.google.com/file/d/1MYkrQSMuMT2Rhrhlh_erPlRzjQCMLgOY/view?usp=drive_link",
    "https://drive.google.com/file/d/1BBJpWbZZa5fzMPMWyazMLOY1gRlLHRXe/view?usp=drive_link",
    "https://drive.google.com/file/d/1MkFMeYNiW9f_WJWJ1vgoqVVN3O5jD61L/view?usp=drive_link",
    "https://drive.google.com/file/d/1KhtbGlaJsLMI06eWwtpj_RdCCwqxX7Ua/view?usp=drive_link",
    "https://drive.google.com/file/d/11mdlRy9zBfQPMGbmwzkn41E_iFfFtO_3/view?usp=drive_link",
    "https://drive.google.com/file/d/1vyCRzJc4lhBz8VOiq1-n4UDlGVoibJcx/view?usp=drive_link",
    "https://drive.google.com/file/d/1Nr8X_3RjgrCLvsZYLhriWKFgmRE-RJ-d/view?usp=drive_link",
    "https://drive.google.com/file/d/1joaPnsLXsUBXaLnvKEc51VcS1Vk3YIBq/view?usp=drive_link",
    "https://drive.google.com/file/d/19CXjRKB2nQ3LhJzdRZoX1N38LZiNLyQK/view?usp=drive_link",
    "https://drive.google.com/file/d/1skJz0RmI9nxP34_CDzIM1hzj2hnwih89/view?usp=drive_link",
    "https://drive.google.com/file/d/1KHur02onthDJW6TojHDq8h1DR-3yBwGr/view?usp=drive_link",
    "https://drive.google.com/file/d/1GimB-2sd57N8gpt4oqMrkWKV3B2TaKbX/view?usp=drive_link",
    "https://drive.google.com/file/d/10T6R0G7L6RUqVd4ln00zJynU4moxPFcG/view?usp=drive_link",
    "https://drive.google.com/file/d/1I6lx2fr9Ip0v240O4W7nt55WMzPZmYC5/view?usp=drive_link",
    "https://drive.google.com/file/d/1DIdusnAN_dLGK8A3_OkwCOIREFxH4m12/view?usp=drive_link",
    "https://drive.google.com/file/d/1FXa6KaRi6vH4rphROHuBiD1XrA6T1-z5/view?usp=drive_link",
    "https://drive.google.com/file/d/1ZKQ0ME9bVHL8_8Cq10y5kNlZ1sdTtEkE/view?usp=drive_link",
    "https://drive.google.com/file/d/1pDYyHiPZNKKNa7TuitJCSDH8LVfFDtWF/view?usp=drive_link",
    "https://drive.google.com/file/d/12slIpSTLSJutopdstvdKuAXIYO91Z329/view?usp=drive_link",
    "https://drive.google.com/file/d/19zGMDh72kDTegQ99hmB5X9z0R_SzDSwF/view?usp=drive_link",
    "https://drive.google.com/file/d/1feCO4GpA71OX2vboi7nfJqimzTU6lFGG/view?usp=drive_link",
    "https://drive.google.com/file/d/18elUSZasbNNGVm0F514fVyJfjZyXclMJ/view?usp=drive_link",
    "https://drive.google.com/file/d/1-Ub-VFYo3bD7q2pn-8w0zaqf45Ivr9T2/view?usp=drive_link",
    "https://drive.google.com/file/d/1g3duFx0yOhtTDPS2D2Heq3g28ATFXwlI/view?usp=drive_link",
    "https://drive.google.com/file/d/1yyETgMU10zjz9YNiXjSaxSozR_hYuhHc/view?usp=drive_link",
    "https://drive.google.com/file/d/1arYEZgbfCmMjQtRwNAxtbptbyaRYX0X7/view?usp=drive_link",
    "https://drive.google.com/file/d/15gdOdPcuGUZ_dMjHzjN-NtKyF2U3XF0_/view?usp=drive_link",
    "https://drive.google.com/file/d/1UBUqnhhZEubXFV3PNCyNnkWQTGtGe9Y2/view?usp=drive_link",
    "https://drive.google.com/file/d/16A1-C6ef-3D3t_5xoAqdXqJ6Ki00mv-J/view?usp=drive_link",
    "https://drive.google.com/file/d/10ciDs3o_i0srDQXRu_74wdVRhrBbW107/view?usp=drive_link",
    "https://drive.google.com/file/d/1PlAayUCEgysG-Ki9p126DF4sQgAKy20h/view?usp=drive_link",
    "https://drive.google.com/file/d/1H8hbxd0U3IGIWox7GhXmE0rQ7sMZOFd4/view?usp=drive_link",
    "https://drive.google.com/file/d/1tF3W-VqvHrScB1VYM5_XqzK3bFLe9YrM/view?usp=drive_link",
    "https://drive.google.com/file/d/1tcry5Hb_0xz8SPPZG8b-xmS53oTtL1c8/view?usp=drive_link",
    "https://drive.google.com/file/d/1BSY6mF51UimhN45sx7nWOROsTzQakxYX/view?usp=drive_link",
    "https://drive.google.com/file/d/14owYJ2KCqRmCtxgmy9YbWBg-uGup2HHo/view?usp=drive_link",
    "https://drive.google.com/file/d/1D_JGsedSFJA-tANQ9f1KWQjCi0Sv2ubJ/view?usp=drive_link",
    "https://drive.google.com/file/d/1I0xwIA6boiw9P0ryCwJwx3CMMYmqtzQn/view?usp=drive_link",
    "https://drive.google.com/file/d/1cIXeZg0VHnJPJrS-nDIKqaHD_u4K7-bJ/view?usp=drive_link",
    "https://drive.google.com/file/d/15c6xYvZJAysr5GZhKcGLi6NWbBpaTFAx/view?usp=drive_link",
    "https://drive.google.com/file/d/1jpLYSQqWmxXlbaF74ib4yh_8Rb5TIPmv/view?usp=drive_link",
    "https://drive.google.com/file/d/1CLKHdkWDB3Uz0D-WxqqQqbLMAUGe7ScH/view?usp=drive_link",
    "https://drive.google.com/file/d/1EvMznt6X9m0mm1t_UeTb32Zw5p-7p66J/view?usp=drive_link",
    "https://drive.google.com/file/d/1PNst2iNTL4NXW3U56v6_gfVq3Iuw8Unn/view?usp=drive_link",
    "https://drive.google.com/file/d/1e2qnpUS2VL5hIQM6CPv7O-jP4Ke5V4Wh/view?usp=drive_link",
    "https://drive.google.com/file/d/1bVnzRejF-9TKIpZNJoIQTZGVE7_6Ar2G/view?usp=drive_link",
    "https://drive.google.com/file/d/1x4YRIR33hpqOpi0SNGujkBN20ONbJZJI/view?usp=drive_link",
    "https://drive.google.com/file/d/1nJalzDCeaD3Y_4d8EMa0-5boYAZNwt00/view?usp=drive_link",
    "https://drive.google.com/file/d/11dFx75mDDALbMbyaq_lkdnX59ks6tUty/view?usp=drive_link",
    "https://drive.google.com/file/d/1dfbAr61CYeCKO9hcW2G_wW2bxmf5Al0z/view?usp=drive_link",
    "https://drive.google.com/file/d/1ieqXCILqjOWd6GDppbtyBIUW47gkcSjW/view?usp=drive_link",
    "https://drive.google.com/file/d/112RZ1-BQC41u5Uu2Qo2a1D6BNUVOPjp6/view?usp=drive_link",
    "https://drive.google.com/file/d/1-fCpvDqceB-ZvZQfRq1pUMJacJR6h2b4/view?usp=drive_link",
    "https://drive.google.com/file/d/1bXSfio3XImMsqLoDdyamRwjhfOpiJ1UL/view?usp=drive_link",
    "https://drive.google.com/file/d/1wvigcWkDTeBN6LJ-SjXo7ct0PKImXksX/view?usp=drive_link",
    "https://drive.google.com/file/d/1N4CKzAiy2iigO8nc9Ff5lC7AiM-ffulF/view?usp=drive_link",
    "https://drive.google.com/file/d/1lf7lnzQyBePj1ODHltkXiw_HyUVM9uBp/view?usp=drive_link",
    "https://drive.google.com/file/d/1RNQEN-LKRntLgnMAh9GYJxhq16uXuoxk/view?usp=drive_link",
    "https://drive.google.com/file/d/1tslElhpWGKDSdW1d5s8bP1XAhSagQGn9/view?usp=drive_link",
    "https://drive.google.com/file/d/1uTwlTnkXJJfLzbDmybqsW4nwOsIlHHf2/view?usp=drive_link",
    "https://drive.google.com/file/d/1RIKIjSsuVaRxGjMJwciU9zNH-UgzEnPU/view?usp=drive_link",
    "https://drive.google.com/file/d/1MMZpKi-Q2NXMJMIebktywCKTPqO5qC-A/view?usp=drive_link",
    "https://drive.google.com/file/d/1u_PsswbT8gbNakmpAZTEJBjuy20hnnur/view?usp=drive_link",
    "https://drive.google.com/file/d/1WWAvdRs0YmnX4rv-PVPGz_0rEadc92G1/view?usp=drive_link",
    "https://drive.google.com/file/d/1NHopt_EF9XMOvTOiZXZ4QSMJuugvk7oN/view?usp=drive_link",
    "https://drive.google.com/file/d/1DFmCyl8B9Mvgft4DMa8AQF61IVqsTrAe/view?usp=drive_link",
    "https://drive.google.com/file/d/1kb4Al0A6IpoGC4UaLtjxiTsFr2f8Dqz0/view?usp=drive_link",
    "https://drive.google.com/file/d/1b-S5jCEAug-aYAp1SDRLfW7W_nQpsQpr/view?usp=drive_link",
    "https://drive.google.com/file/d/10hUdJYUh_CqIZGvFwiJm_a3kGKcAXpMB/view?usp=drive_link",
    "https://drive.google.com/file/d/1-IjEoMPMZT74S7-fUgXNrIQij_vWX8uk/view?usp=drive_link",
    "https://drive.google.com/file/d/16aCDxSKtKxBOrKsc_S1jf_T9pko_klGf/view?usp=drive_link",
    "https://drive.google.com/file/d/1s_bVUWfYzye48TG1_fcm5ytJdqq80Krs/view?usp=drive_link",
    "https://drive.google.com/file/d/1okso0e1U9i22qaPf1O6UpfnW0jREV0Uf/view?usp=drive_link",
    "https://drive.google.com/file/d/1ivZimpgpCSeFnfWsADXOWwJG4lihcXcd/view?usp=drive_link",
    "https://drive.google.com/file/d/1RnfxCC2gNBTuR_JvCn-JiFOLn4ucobZt/view?usp=drive_link",
    "https://drive.google.com/file/d/1fwGSMkwvfPJ20YZmlbv4MPlmZ3WoO_Z0/view?usp=drive_link",
    "https://drive.google.com/file/d/14uE2AqbOqlAChjbDEqcGY_GO39E88GRY/view?usp=drive_link"
  ];

  const ul = document.getElementById("extra-course-links");
  if (ul) {
    extraLinks.forEach((url, idx) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = `課程紀錄 #${String(idx + 1).padStart(2, "0")}`;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

});
/* ===== Continuing Education: Search Filter ===== */
const ceSearchInput = document.getElementById("ceSearchInput");

if (ceSearchInput) {
  ceSearchInput.addEventListener("input", () => {
    const keyword = ceSearchInput.value.toLowerCase().trim();
    const allLists = document.querySelectorAll(".ce-list");

    allLists.forEach((list) => {
      const items = list.querySelectorAll("li");
      let visibleCount = 0;

      items.forEach((item) => {
        const text = item.innerText.toLowerCase();
        if (text.includes(keyword)) {
          item.style.display = "";
          visibleCount++;
        } else {
          item.style.display = "none";
        }
      });

      const details = list.closest("details");
      if (details) {
        details.style.display = visibleCount === 0 ? "none" : "";
      }
    });
  });
}

/* ===== Continuing Education: Auto Count ===== */
function updateCourseCounts() {
  document.querySelectorAll(".ce-wrapper details").forEach((details) => {
    const items = details.querySelectorAll(".ce-list li");
    const countSpan = details.querySelector(".ce-count");

    if (countSpan) {
      countSpan.textContent = `（${items.length} courses）`;
      countSpan.style.marginLeft = "6px";
      countSpan.style.fontSize = "13px";
      countSpan.style.color = "#6a4e2d";
      countSpan.style.fontWeight = "600";
    }
  });
}

document.addEventListener("DOMContentLoaded", updateCourseCounts);
<script>
document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     🔍 即時搜尋（課程＋證書）
     ========================= */
  const searchInput = document.getElementById("ce-search");
  const allItems = document.querySelectorAll(".ce-list li");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();

      allItems.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(keyword) ? "" : "none";
      });

      updateCounts();
    });
  }
document.querySelectorAll(".ce-toc a").forEach(link => {
  link.addEventListener("click", () => {
    const targetId = link.getAttribute("href").replace("#", "");
    const details = document.getElementById(targetId);
    if (details && details.tagName === "DETAILS") {
      details.open = true;
    }
  });
});

  /* =========================
     📊 分類課程 / 證書數量
     ========================= */
  function updateCounts() {
    document.querySelectorAll(".ce-section").forEach(section => {
      const visibleItems = section.querySelectorAll("li:not([style*='display: none'])");
      const countEl = section.querySelector(".ce-count");
      if (countEl) {
        countEl.textContent = `（${visibleItems.length} items）`;
      }
    });
  }

  updateCounts();
});
document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".timeline-item .toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const item = toggle.closest(".timeline-item");
      item.classList.toggle("open");
    });
  });
});

</script>
