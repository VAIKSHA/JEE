import React from 'react';

export default function Card() {
    const cards = [
        { title: "PHYSICS", videoId: "_lLwOvc0j70" }, 
        { title: "CHEMISTRY", videoId: "kwG6zR-Gvso" }, 
        { title: "MATHS", videoId: "I3O9dzuHZw8" }, 
    ];

    return (
        <div style={{ padding: '20px', marginTop: '20px', marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {cards.map((card, index) => (
                    <div
                        key={index}
                        style={{
                            flex: '1 1 calc(33.333% - 20px)',
                            maxWidth: 'calc(33.333% - 20px)',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            textAlign: 'center',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                        }}
                    >
                        <div style={{ padding: '20px' }}>
                            <h5 style={{ fontSize: '1.25rem', color: '#007bff', textTransform: 'uppercase', marginBottom: '15px' }}>
                                <strong><em>{card.title}</em></strong>
                            </h5>
                            <iframe
                                style={{ border: 'none', borderRadius: '10px', width: '100%', height: '230px' }}
                                src={`https://www.youtube.com/embed/${card.videoId}`}
                                title={`${card.title} Video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}