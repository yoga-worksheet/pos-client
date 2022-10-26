import React from "react";

const Table = ({ data }) => {
	return (
		<table className="border-collapse w-full text-sm text-left mt-8">
			<thead className="border-b">
				<tr>
					{data.headData.map((item, index) => (
						<th className="px-4 py-2" key={index * 2}>
							{item}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.bodyData.map((row, item) => (
					<tr className="border-b">
						{row.map((data, index) => (
							<td className="px-4 py-2">{data}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
