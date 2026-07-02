// SARIKAYA SU TESİSAT

console.log("Site başarıyla yüklendi.");

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        console.log("Bağlantıya tıklandı.");
    });
});
