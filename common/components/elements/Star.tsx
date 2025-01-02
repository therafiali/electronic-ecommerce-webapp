import React from 'react'

interface StarProps {
    count: number
}

const Star = (props: StarProps) => {

    const stars = Array.from({ length: props.count }, (_, index) => index);

    return (
        <div className="w-28 h-3.5 gap-2.5 inline-flex">
            {stars.map((starIndex) => (
                <svg key={starIndex} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.32762 1.41659L10.6259 4.01313C10.8029 4.36721 11.275 4.72128 11.6684 4.78029L14.0191 5.17371C15.5239 5.42943 15.878 6.51132 14.7961 7.59321L12.9667 9.43242C12.6618 9.73732 12.4848 10.3373 12.5831 10.77L13.1044 13.042C13.5175 14.832 12.5635 15.5304 10.98 14.596L8.77684 13.2879C8.37359 13.0518 7.72445 13.0518 7.3212 13.2879L5.10824 14.5862C3.52475 15.5205 2.57072 14.8222 2.9838 13.0322L3.50508 10.7602C3.60343 10.3373 3.4264 9.73732 3.1215 9.42259L1.30196 7.60304C0.220064 6.52115 0.574138 5.42943 2.07895 5.18354L4.4296 4.79013C4.82302 4.72128 5.29512 4.37704 5.47215 4.02297L6.77042 1.42643C7.46873 0.0101353 8.62931 0.0101352 9.32762 1.41659Z" fill="#ACACAC" />
                </svg>
            ))}
        </div>
    )
}

export default Star