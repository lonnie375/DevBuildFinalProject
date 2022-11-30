export interface Habit {
    id: number, 
    users_id: number,
    title: string, 
    category_id: number, 
    amount: string,
    startDate: Date, 
    endDate: Date, 
    description: string
}
