# 📰 DAILY NEWS & CURRENT AFFAIRS SOURCES GUIDE

## Where to Get News For Your TNPSC Portal

### Official News Sources

#### 1. **Thanthi (Tamil Newspaper)** 🔴
- **Website:** thanthi.com
- **Language:** Tamil (with English sections)
- **Coverage:** Tamil Nadu politics, economy, sports, entertainment
- **TNPSC Relevance:** Very High - Local TN news for General Knowledge
- **Update Frequency:** Multiple times daily
- **Best For:** State-level politics, Tamil Nadu development news

#### 2. **The Hindu** 📘
- **Website:** thehindu.com
- **Language:** English
- **Coverage:** National & International news, Politics, Economy, Science
- **TNPSC Relevance:** High - National affairs & current events
- **Update Frequency:** 24/7
- **Best For:** Broad general knowledge, National news, Analysis

#### 3. **TNPSC Official Website** 🎯
- **Website:** tnpsc.gov.in
- **Coverage:** Exam notifications, recruitment, syllabus updates
- **TNPSC Relevance:** Critical - Official exam information
- **Update Frequency:** Regularly
- **Best For:** Exam-specific news and updates

#### 4. **BBC Tamil / BBC News** 🌐
- **Website:** bbc.com/tamil (Tamil), bbc.com (English)
- **Coverage:** International news with Tamil translation
- **TNPSC Relevance:** Good - Global current affairs
- **Update Frequency:** Continuous
- **Best For:** International affairs, World news

#### 5. **Reuters & AP News** 📡
- **Coverage:** World news agencies
- **TNPSC Relevance:** Good - General knowledge questions
- **Best For:** International events, Economic news

#### 6. **Times of India / Indian Express** 📰
- **Coverage:** National English newspapers
- **TNPSC Relevance:** High - National & state news
- **Best For:** National politics, economy, development

---

## How to Update News DAILY

### Method 1: Manual Update (Recommended for accuracy)

**Step 1: Collect News**
- Check Thanthi.com for Tamil Nadu news
- Check TheHindu.com for national & international news
- Filter for TNPSC/GK relevance

**Step 2: Select 4-6 stories** (2-3 from Thanthi, 2-3 from Hindu)

**Step 3: Edit daily-news.html**
- Add new news card (copy existing card structure)
- Update: Source, Title, Summary, Date, Category
- Maintain consistent formatting

**Step 4: Category Tags to Use**
- thanthi (for Thanthi news)
- hindu (for The Hindu news)
- tnpsc (if TNPSC/exam related)
- politics (for political news)
- economy (for economy/business news)
- education (for education news)
- sports (for sports news)

**Step 5: Update Timestamp**
- Change "Last Updated" date to today
- Update time to current time

**Step 6: Save & Deploy**
```bash
git add daily-news.html
git commit -m "Update daily news - Sept 1, 2026"
git push origin main
```

---

## Sample News Card Template

```html
<!-- News Card Template -->
<div class="news-card" data-category="hindu,politics">
    <div class="news-header">
        <span class="news-source hindu">The HINDU</span>
        <span class="news-category">🏛️ Politics</span>
        <h3 class="news-title">[Your Headline Here]</h3>
    </div>
    <div class="news-body">
        <p class="news-summary">[2-3 line summary of the news]</p>
        <div class="news-meta">
            <span class="news-date">📅 Sept 1, 2026</span>
            <a href="[link-to-original-news]" class="read-btn">Read More →</a>
        </div>
    </div>
</div>
```

---

## Current Affairs vs Daily News

| Feature | Daily News (daily-news.html) | Current Affairs (current-affairs.html) |
|---------|------------------------------|----------------------------------|
| **Source** | Newspaper websites | Multiple sources |
| **Frequency** | Multiple times daily | Daily/Regular |
| **Coverage** | All categories | All categories |
| **Format** | News cards with summaries | Event cards |
| **Best For** | Latest breaking news | Exam preparation |
| **Update** | Manual (recommended) | Manual or scheduled |

---

## IMPORTANT CATEGORIES FOR TNPSC

**Mark these as TNPSC-relevant (🎯 tag):**
- TNPSC exam notifications & updates
- Government policy changes
- Educational reforms
- Political appointments
- Economic statistics
- Social welfare schemes
- National events & milestones
- Environmental policies
- Infrastructure development

---

## Automation Options (Future)

If you want automatic updates (requires backend):

1. **RSS Feed Integration** - Automatically pull from newspaper RSS feeds
2. **API Integration** - Use news API services (NewsAPI.org, etc.)
3. **Scheduled Scripts** - Set up cron jobs to fetch & update
4. **Manual Google Sheets** - Maintain master list → auto-update portal

Currently recommended: **Manual update** (ensures quality & TNPSC relevance)

---

## Checklist for Daily Update

- [ ] Visit Thanthi.com & TheHindu.com
- [ ] Select 4-6 relevant stories
- [ ] Filter for TNPSC/GK value
- [ ] Update daily-news.html with new cards
- [ ] Remove old news (keep last 30 days)
- [ ] Update timestamp
- [ ] Git commit & push
- [ ] Verify page loads correctly

---

## Example Daily Update

**Date:** September 1, 2026  
**Time:** 9:00 AM

1. ✅ TNPSC Group 2A Exam Notification (Thanthi)
2. ✅ TN Cabinet Approves Welfare Schemes (The Hindu)
3. ✅ Chennai Metro Phase 2 Update (Thanthi)
4. ✅ State GDP Growth Reaches 7.5% (Thanthi)
5. ✅ TNPSC Recruitment - 2000 Vacancies (The Hindu)
6. ✅ Tamil Nadu Textile Industry Recovery (The Hindu)

---

## Tips for Best Results

✅ Prioritize Tamil Nadu & TNPSC-specific news  
✅ Include mix of Thanthi (Tamil) & The Hindu (English)  
✅ Balance between politics, economy, science, & education  
✅ Verify news from official sources before posting  
✅ Use engaging titles & summaries  
✅ Include source links for readers to verify  
✅ Update consistently (daily or 3x/week minimum)  
✅ Remove duplicate news from same story  

---

**Updated:** September 1, 2026
