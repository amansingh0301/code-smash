export const prepareTokenBody = (form: any) => {
    return JSON.stringify({
        name: form.name,
        time: form.time,
        questions: form.questions
    })
}