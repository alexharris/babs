export default ({ $axios, env }) => {
    $axios.onRequest(config => {
        config.headers.common['X-eBirdApiToken'] = `l74e03ri8jei`;
    });
}
  