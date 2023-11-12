export class Config {
  private static APP_ID =
    'AKfycby0D_SwaqCH4sR2LoXdSso8qpbmTHWUXrahMzPpYpmKjzXZ9rpE5xRPoRakchUiLH5g'
  private static url = `https://script.google.com/macros/s/${Config.APP_ID}/exec`

  public static get Url() {
    return Config.url
  }
}
