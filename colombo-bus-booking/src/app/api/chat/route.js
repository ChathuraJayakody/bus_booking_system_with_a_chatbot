import { NextResponse } from 'next/server';
import { busRoutes, locations, chatbotKnowledge } from '@/data/busRoutes';

export async function POST(request) {
  try {
    const { message } = await request.json();
    const lowerMessage = message.toLowerCase();

    let response = '';

    // Greeting
    if (lowerMessage.match(/\b(hi|hello|hey|greetings)\b/)) {
      response = chatbotKnowledge.greeting[Math.floor(Math.random() * chatbotKnowledge.greeting.length)];
    }
    // Route inquiry
    else if (lowerMessage.includes('route') || lowerMessage.includes('bus from') || lowerMessage.includes('bus to')) {
      const fromMatch = lowerMessage.match(/from\s+([a-z\s]+?)(?:\s+to|\?|$)/i);
      const toMatch = lowerMessage.match(/to\s+([a-z\s]+?)(?:\?|$)/i);
      
      if (fromMatch || toMatch) {
        const from = fromMatch ? fromMatch[1].trim() : null;
        const to = toMatch ? toMatch[1].trim() : null;
        
        const matchedRoutes = busRoutes.filter(route => {
          const routeFrom = route.from.toLowerCase();
          const routeTo = route.to.toLowerCase();
          
          if (from && to) {
            return routeFrom.includes(from) && routeTo.includes(to);
          } else if (from) {
            return routeFrom.includes(from);
          } else if (to) {
            return routeTo.includes(to);
          }
          return false;
        });

        if (matchedRoutes.length > 0) {
          response = `I found ${matchedRoutes.length} route(s) for you:\n\n`;
          matchedRoutes.forEach(route => {
            response += `🚌 Route ${route.route}: ${route.from} → ${route.to}\n`;
            response += `⏱️ Duration: ${route.duration}\n`;
            response += `💰 Price: LKR ${route.price}\n`;
            response += `🕐 Frequency: ${route.frequency}\n`;
            response += `📅 Operating: ${route.operatingHours}\n\n`;
          });
        } else {
          response = "I couldn't find a direct route matching your search. Please check our available routes or try different locations.";
        }
      } else {
        response = "I can help you find bus routes! Please specify your departure and destination. For example: 'Show me buses from Colombo Fort to Negombo'";
      }
    }
    // Price inquiry
    else if (lowerMessage.includes('price') || lowerMessage.includes('fare') || lowerMessage.includes('cost') || lowerMessage.includes('how much')) {
      response = `${chatbotKnowledge.fareInfo}\n\nWould you like to know the price for a specific route? Just tell me the departure and destination!`;
    }
    // Booking inquiry
    else if (lowerMessage.includes('book') || lowerMessage.includes('ticket') || lowerMessage.includes('reservation')) {
      response = chatbotKnowledge.bookingInfo;
    }
    // Payment inquiry
    else if (lowerMessage.includes('payment') || lowerMessage.includes('pay')) {
      response = chatbotKnowledge.paymentMethods;
    }
    // Cancellation inquiry
    else if (lowerMessage.includes('cancel') || lowerMessage.includes('refund')) {
      response = chatbotKnowledge.cancellationPolicy;
    }
    // Contact inquiry
    else if (lowerMessage.includes('contact') || lowerMessage.includes('support') || lowerMessage.includes('help')) {
      response = chatbotKnowledge.contactInfo;
    }
    // Operating hours
    else if (lowerMessage.includes('time') || lowerMessage.includes('hours') || lowerMessage.includes('when')) {
      response = "Most of our buses operate from 5:00 AM to 11:00 PM. Operating hours vary by route. Which route would you like to know about?";
    }
    // Location list
    else if (lowerMessage.includes('locations') || lowerMessage.includes('where') || lowerMessage.includes('cities')) {
      response = `We serve the following locations in the Colombo district:\n\n${locations.join(', ')}\n\nWhich route would you like to know more about?`;
    }
    // Show all routes
    else if (lowerMessage.includes('all routes') || lowerMessage.includes('show routes')) {
      response = `Here are our popular routes:\n\n`;
      busRoutes.slice(0, 5).forEach(route => {
        response += `🚌 Route ${route.route}: ${route.from} → ${route.to} (LKR ${route.price})\n`;
      });
      response += `\n...and ${busRoutes.length - 5} more! Ask about a specific route for details.`;
    }
    // Default response
    else {
      response = "I'm here to help with:\n\n• Finding bus routes\n• Checking prices and schedules\n• Booking tickets\n• Payment information\n• Cancellation policies\n\nWhat would you like to know?";
    }

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Chatbot error:', error);
    return NextResponse.json(
      { response: 'Sorry, I encountered an error. Please try again.' },
      { status: 500 }
    );
  }
}