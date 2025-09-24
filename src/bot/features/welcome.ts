import type { Context } from '#root/bot/context.js'
import { logHandle } from '#root/bot/helpers/logging.js'
import { createMainMenuKeyboard } from '#root/bot/keyboards/main-menu.js'
import { Composer } from 'grammy'

const composer = new Composer<Context>()

const feature = composer.chatType('private')

feature.command('start', logHandle('command-start'), async (ctx) => {
  return ctx.reply(ctx.t('welcome'), {
    reply_markup: await createMainMenuKeyboard(ctx),
  })
})

export { composer as welcomeFeature }
