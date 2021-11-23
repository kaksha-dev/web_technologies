import React from 'react';
import { StyledTable, StyledTableHeader, StyledTableCell } from './styles';
import Spinner from './../spinner';
import Button from './../button';

const DataTable = ({ books, dataLoading, editAction }) => {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <StyledTableHeader>Sr. No.</StyledTableHeader>
                    <StyledTableHeader>Book name</StyledTableHeader>
                    <StyledTableHeader>Author Name</StyledTableHeader>
                    <StyledTableHeader>Actions</StyledTableHeader>
                </tr>
            </thead>
            <tbody>
                {!dataLoading ? (
                    books.map((book, i) => {
                        return (
                            <tr key={book.id}>
                                <StyledTableCell>{i + 1}</StyledTableCell>
                                <StyledTableCell>{book.name}</StyledTableCell>
                                <StyledTableCell>
                                    {book.authorName}
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Button
                                        label="Edit"
                                        clickHandler={() => editAction(book)}
                                    />
                                </StyledTableCell>
                            </tr>
                        );
                    })
                ) : (
                    <Spinner />
                )}
                {/* <tr>
                    <td>1</td>
                    <td>{books[0].name}</td>
                    <td>BOneAuthorName</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>BTwoName</td>
                    <td>BTwoAuthorName</td>
                    <td>Edit</td>
                </tr> */}
            </tbody>
        </StyledTable>
    );
};

export default DataTable;
