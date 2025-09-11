<script>
  const circles = document.querySelectorAll('.circle');

  circles.forEach(c => {
    c.addEventListener('click', () => {
      c.style.transform = "scale(1.5)";
      setTimeout(() => {
        c.style.transform = "scale(1)";
      }, 300);
    });
  });
</script>
