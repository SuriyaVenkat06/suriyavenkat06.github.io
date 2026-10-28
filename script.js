const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(item => { item.classList.remove('active'); item.setAttribute('aria-pressed', 'false'); });
  button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
  let count = 0;
  projects.forEach(project => { const show = button.dataset.filter === 'all' || project.dataset.category.split(' ').includes(button.dataset.filter); project.hidden = !show; if (show) count++; });
  document.getElementById('project-count').textContent = `Showing ${count} projects`;
}));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy-email').addEventListener('click', async () => {
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText('s.suriyavenkatramanan@gmail.com'); status.textContent = 'Email copied'; }
  catch { status.textContent = 'Please use the email link above.'; }
});
