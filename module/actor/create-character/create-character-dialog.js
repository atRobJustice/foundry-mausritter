export async function showCreateCharacterDialog(callback) {
    const template = 'systems/mausritter/templates/dialogs/create-character.html';
    const html = await foundry.applications.handlebars.renderTemplate(template)
    const d = new Dialog({
        title: "What do you want to create?",
        content: html,
        buttons: {
            roll: {
                icon: '<i class="fas fa-check"></i>',
                label: 'ok',
                callback: (html) => {
                    const formElement = html[0].querySelector('fieldset');
                    const formData = new foundry.applications.ux.FormDataExtended(formElement);
                    const options = formData.object;
                    callback(options)
                }
            },
            cancel: {
                icon: '<i class="fas fa-times"></i>',
                label: game.i18n.localize('Maus.Cancel'),
                callback: () => {
                }
            }
        },
        default: "roll",
        close: () => {
        }
    });
    d.render(true);
}