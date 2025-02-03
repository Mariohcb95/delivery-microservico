export interface errors {
    status: number,
    type: string,
    objects: [
        {
            name: string,
            userMessage: string
        }
    ]
}