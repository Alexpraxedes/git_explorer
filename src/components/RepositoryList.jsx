import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Form is React',
    link: 'https://github.com'
};

export function RepositoryList(){
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                <RepositoryItem repository={repository} />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    );
}