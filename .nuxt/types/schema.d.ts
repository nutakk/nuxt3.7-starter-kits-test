import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }