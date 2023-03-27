import React from 'react';
import Table from 'react-bootstrap/Table';

interface Props {
  title?: string;
  details: {
    label: string;
    description: string;
  }[];
}

export default function DetailsGrid({ title, details }: Props) {
  return (
    <>
      <p className={'text-primary fs-5 fw-bold'}>{title}</p>
      <div className='border-top border-2 border-primary'></div>
      <Table responsive>
        <tbody>
          {details.map((detail, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className={'py-3'}>
                  <p className={'mb-0'}>
                    <strong>{detail.label}</strong>
                  </p>
                </td>
                <td className={'py-3'}>
                  <p className={'mb-0'}>{detail.description}</p>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </Table>
    </>
  );
}
