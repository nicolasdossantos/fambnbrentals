import React, { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import AttractionCard from './AttractionCard';

const ToDoCategory = (props) => {
  const { title, items, icon: Icon, color = '#7AC7C4', index = 0 } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const styles = {
    categoryCard: {
      background: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
      border: '1px solid rgba(0, 0, 0, 0.04)',
      animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 20px',
      cursor: 'pointer',
      transition: 'background 0.2s ease',
      background: isExpanded ? 'rgba(122, 199, 196, 0.05)' : 'transparent',
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },
    iconContainer: {
      width: '44px',
      height: '44px',
      borderRadius: '12px',
      background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: color,
    },
    titleContainer: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: '17px',
      fontWeight: '600',
      color: '#2D3748',
      margin: 0,
    },
    itemCount: {
      fontSize: '13px',
      color: '#718096',
      marginTop: '2px',
    },
    expandIcon: {
      color: '#A0AEC0',
      transition: 'transform 0.3s ease',
      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    content: {
      maxHeight: isExpanded ? '10000px' : '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease-in-out',
    },
    itemsContainer: {
      padding: '0 16px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
  };

  return (
    <div style={styles.categoryCard}>
      <div 
        style={styles.header} 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={styles.headerLeft}>
          <div style={styles.iconContainer}>
            <Icon />
          </div>
          <div style={styles.titleContainer}>
            <h3 style={styles.title}>{title}</h3>
            <span style={styles.itemCount}>{items.length} places</span>
          </div>
        </div>
        <KeyboardArrowDownRoundedIcon style={styles.expandIcon} />
      </div>
      
      <div style={styles.content}>
        <div style={styles.itemsContainer}>
          {items.map((attraction, idx) => (
            <AttractionCard key={attraction.name} {...attraction} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ToDoCategory;
